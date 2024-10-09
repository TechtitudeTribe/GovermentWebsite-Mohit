import leafsDesign from "/leafs-design.svg";
import product1 from "/product-1.jfif";
export default function Product() {
  return (
    <div className="bg-mid_gray p-6 min-[800px]:p-20 font-light">
      <div className="flex items-center gap-4 m-fit">
        <img src={leafsDesign} alt="leaf-design" className="h-10" />
        <h2 className="gradient-border text-4xl font-light bg-transparent">
          Product 1
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 min-[800px]:gap-10">
        <div >
          <p className="my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p className="my-4 font-medium">
            “It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.”
          </p>
          <p className="my-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt
          </p>
          <p className="my-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga., lores et quas molestias
            excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum
            fuga.
          </p>
        </div>

        <div className=" corner-border max-h-[410px]">
          <div className="top-left -top-3 -left-3"></div>
          <div className="bottom-right -bottom-2 -right-3"></div>
          <div className="  p-1 mb-1  text-center font-light text-lg  rounded-tr-[85px] rounded-bl-[85px] overflow-hidden">
            <img
              src={product1}
              alt={"about-image-1"}
              className=" w-full h-full object-cover max-h-[400px]"
            />
          </div>
        </div>
        <p className="col-span-2 -mt-8">
          The use of male cow calves now at minimal requirement to farmers
          because of heavy mechanization in the agriculture. Besides that the
          low yielding cow which are non-profitable are burden on farmers to
          rear. Because of that the cow and its progeny are not being liking by
          farmers to rear therefore, the farmers free them as destitute cow.
          These destitute govansh are creating menace to farmers and are cause
          of road accident too. In context to that the state Government
          promulgated the policy for temporary establishment of gaushalas and
          their management vide GO # 4324/37-2-2018-5(53)/2018 Dated January 2nd
          ,2019. The objective was to address the burning issue of destitute
          cattle in villages, local bodies , Gram panchayat , Shetra panchayat ,
          Jila Panchayat and Municipal Corporations in the State . The policy
          directives were issued vide GO # 261/37-2-2019-5(53)/18 Dated 28 Jan
          ‘2019 /January 2nd 2019 according to which guidelines were issued
          regarding creation of temporary establishments for destitute cattle .
          These directives laid out the following –
        </p>
      </div>

    </div>
  );
}
