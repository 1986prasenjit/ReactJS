import { assets } from "../../assets/assets/frontend_assets/assets";

function Policies() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-2 mt-10 cardResponsive">
        <div className="bg-white flex flex-col items-center justify-center  w-full px-4 py-2">
          <div>
            <img src={assets.exchange_icon} className="w-16" alt="" />
          </div>
          <div>
            <h3 className="font-semibold">Easy Exchange Policy</h3>
          </div>
          <div>
            <p className="text-gray-400">
              We offer hassle free exchange policy
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col items-center justify-center  w-full px-4 py-2">
          <div>
            <img src={assets.exchange_icon} alt="" />
          </div>
          <div>
            <h3 className="font-semibold">Easy Exchange Policy</h3>
          </div>
          <div>
            <p className="text-gray-400">
              We offer hassle free exchange policy
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col items-center justify-center  w-full px-4 py-2">
          <div>
            <img src={assets.exchange_icon} alt="" />
          </div>
          <div>
            <h3 className="font-semibold">Easy Exchange Policy</h3>
          </div>
          <div>
            <p className="text-gray-400">
              We offer hassle free exchange policy
            </p>
          </div>
        </div>
      </div>
      <div className="mt-28"></div>
    </>
  );
}

export default Policies;
