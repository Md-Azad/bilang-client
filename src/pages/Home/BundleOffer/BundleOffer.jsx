const BundleOffer = () => {
  return (
    <div className=" w-full bg-cyan-600 p-8">
      <div className="m-2  h-full bg-white mx-auto rounded-lg p-4">
        <h1 className="text-center font-bold text-xl py-4">
          Save 40% by subscribing annual package
        </h1>
        <div className=" gap-4 bg-gray-200 w-1/4 mx-auto p-8 rounded-lg">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-cyan-600">$100 </h1>
            <div className=" border">
              <h3 className="text-left font-semibold">per year</h3>
              <p className="text-gray-500 lowercase font-semibold ">
                Plus Local taxes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundleOffer;
