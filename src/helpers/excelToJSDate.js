export default function excelDateToJSDate(excelDate) {
      // Excel dates start from January 1, 1900
      const excelEpoch = new Date(1900, 0, 1);
      // Adjust for Excel's leap year bug
      const jsDate = new Date(excelEpoch.getTime() + (excelDate - 1) * 24 * 60 * 60 * 1000);
    
      // Adjust for the leap year bug for dates after February 28, 1900
      if (excelDate > 59) {
        jsDate.setDate(jsDate.getDate() - 1);
      }
      const day = String(jsDate.getDate()).padStart(2, '0');
      const month = String(jsDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
      const year = jsDate.getFullYear();
      return `${day}/${month}/${year}`;
    }
    

    