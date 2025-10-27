const Title = ({ textOne, textTwo }) => {
  return (
    <div className="inline-flex  sm:flex-row  gap-4 items-center mb-3">
      <div>
        <p className="text-gray-500 font-medium">{textOne}</p>
        <p className="text-gray-700 font-bold ml-2">{textTwo}</p>
      </div>
      <p className="w-8 md:w-10 h-[2px] bg-[#414141]"></p>
    </div>
  );
};

export default Title;
