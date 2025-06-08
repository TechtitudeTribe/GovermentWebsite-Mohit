import { Icon, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const API_URL = import.meta.env.VITE_API_URL;
function formatDate(dateInput) {
  const date = new Date(dateInput);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
export default function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [selection, setSelection] = useState({
    selectedDate: new Date(),
    start: "",
    end: "",
    house_no: "",
  });
  const onChange = (newDate) =>
    setSelection((prev) => ({
      ...prev,
      selectedDate: newDate,
      start: "",
      end: "",
    }));

  const tileClassName = ({ date, view }) => {
    let className = "min-h-[60px] min-w-[60px] rounded-xl";
    if (date.toDateString() === selection.selectedDate?.toDateString()) {
      className += " bg-primary text-white";
    } else {
      className += " bg-[#D9D9D9]";
    }
    return className;
  };
  async function getAttendance() {
    setIsLoading(true);
    try {
      let query = ``;
      if (selection.selectedDate)
        query += `date=${formatDate(selection.selectedDate)}`;
      else if (selection.start && selection.end)
        query += `start=${selection.start}&end=${selection.end}`;
      if (selection.house_no) query += `&house_no=${selection.house_no}`;
      const response = await axios.get(`${API_URL}/attendance?${query}`);
      setAttendance(response.data);
    } catch (error) {
      setAttendance([]);
      setIsError(error.response?.data.message || error.message);
    } finally {
      setIsLoading(false);
    }
  }
  const exportToExcel = () => {
    // Create a new worksheet
    const ws = XLSX.utils.json_to_sheet(attendance);

    // Create a new workbook and add the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Write the workbook to a binary string
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

    // Convert the binary string to an array buffer
    const buf = new ArrayBuffer(wbout.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < wbout.length; i++) {
      view[i] = wbout.charCodeAt(i) & 0xff;
    }

    // Create a Blob object for the file
    const blob = new Blob([buf], { type: "application/octet-stream" });

    // Create a link to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "attendance.xlsx"; // The name of the file to be downloaded
    link.click();
  };
  useEffect(function overwriteDefaultCss() {
    // Select all abbr elements within the calendar weekday names
    const abbrTags = document.querySelectorAll(
      ".react-calendar__month-view__weekdays__weekday abbr"
    );
    abbrTags.forEach((abbr) => {
      abbr.removeAttribute("title"); // Remove the title attribute to remove underline (dots)
    });
    const daysContainer = document.querySelector(
      ".react-calendar__month-view__days"
    );

    // Applying grid layout for calendar component
    if (daysContainer) {
      daysContainer.style.display = "grid";
      daysContainer.style.gridTemplateColumns = "repeat(7, 1fr)";
      daysContainer.style.gap = "10px";
    }
  }, []);
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);
  return (
    <main className="p-4 sm:p-10 bg-mid_gray flex flex-col items-center gap-6">
      <h3 className="text-4xl sm:text-6xl">Attendance</h3>
      <section className="flex flex-col lg:flex-row items-center gap-4 xl:gap-8">
        <div>
          <Calendar
            onChange={onChange}
            value={selection.selectedDate}
            tileClassName={tileClassName}
            view="month" // Restrict view to only the month view
            minDetail="month" // Prevent navigation to years or decades
            prev2Label={null} // Hide the double left (year jump) button
            next2Label={null} // Hide the double right (year jump) button
            prevLabel={<Icon as={ChevronLeftIcon} boxSize={10} />}
            nextLabel={<Icon as={ChevronRightIcon} boxSize={10} />}
            className="bg-[#EEEBE7] text-center p-5 rounded-xl text-lg"
          />
        </div>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div>
              <p>Start Date</p>
              <input
                type="date"
                value={selection.start}
                onChange={(e) =>
                  setSelection((prev) => ({
                    ...prev,
                    start: e.target.value,
                    selectedDate: null,
                  }))
                }
                className="p-3 rounded-lg border border-primary min-w-[250px]"
              />
            </div>
            <div>
              <p>End Date</p>
              <input
                type="date"
                value={selection.end}
                onChange={(e) =>
                  setSelection((prev) => ({
                    ...prev,
                    end: e.target.value,
                    selectedDate: null,
                  }))
                }
                className="p-3 rounded-lg border border-primary min-w-[250px]"
              />
            </div>
          </div>{" "}
          <div className="flex flex-col gap-2">
            <p className="text-sm">*Optional</p>
            <input
              type="number"
              placeholder="Enter house number"
              value={selection.house_no}
              onChange={(e) =>
                setSelection((prev) => ({ ...prev, house_no: e.target.value }))
              }
              className="p-3 rounded-lg border border-primary min-w-[250px] outline-none"
            />
            <button
              type="submit"
              className="mt-2 min-w-[100px] p-2 rounded-xl bg-primary text-white text-lg font-medium disabled:opacity-50 disabled:cursor-progress"
              disabled={
                isLoading ||
                (!selection.selectedDate &&
                  (!selection.start || !selection.end))
              }
              onClick={getAttendance}
            >
              {isLoading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="green.500"
                  size="lg"
                />
              ) : (
                <p>Get Attendance</p>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* <form
        onSubmit={getAttendance}
        className="flex flex-col sm:flex-row gap-4"
      >
        <input
          type="number"
          placeholder="Enter house number"
          required
          className="px-2 rounded-xl border border-gray-500 outline-none"
        />
        <button
          type="submit"
          className="min-w-[100px] p-2 rounded-xl bg-primary text-white text-lg font-medium disabled:opacity-50 disabled:cursor-progress"
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="green.500"
              size="lg"
            />
          ) : (
            <p>Get Attendance</p>
          )}
        </button>
      </form> */}
      <section className="overflow-x-auto max-w-full">
        {attendance[0] ? (
          <div className="text-center bg-white p-2 rounded-t-xl">
            <table className="table-auto">
              <thead className="  whitespace-nowrap lg:whitespace-normal">
                <tr className="text-xl border-b-2 border-black">
                  <th className="px-2">SL. NO.</th>
                  <th className="px-2">House No.</th>
                  <th className="px-2">House Owner</th>
                  <th className="px-2">Attended By</th>
                  <th className="px-2">Date</th>
                  <th className="px-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 3 === 0
                        ? "bg-red-100"
                        : index % 3 === 1
                        ? "bg-white"
                        : "bg-green-100"
                    }  border-b-2 border-gray-300 text-xl`}
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{item.house_no}</td>
                    <td className="p-2">{item.house_owner}</td>
                    <td className="p-2">{item.attended_by}</td>
                    <td className="p-2">{item.date}</td>
                    <td className="p-2">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={exportToExcel}
              className="bg-primary text-white p-2 rounded-xl my-4"
            >
              Download as Excel
            </button>
          </div>
        ) : isError ? (
          <p className="text-xl font-medium text-red-500">{isError}</p>
        ) : (
          <p className="text-xl font-medium">
            Select date or range of dates to search
          </p>
        )}
      </section>
    </main>
  );
}
