const Title = ({ textOne, textTwo }) => {
  return (
    <div className="inline-flex  sm:flex-row  gap-4 items-center mb-3">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <p className="text-gray-500 font-light text-4xl">{textOne}</p>
        <p className="text-gray-700 font-semibold ml-2 text-4xl">{textTwo}</p>
      </div>
      <p className="w-8 md:w-10 h-[2px] bg-[#414141]"></p>
    </div>
  );
};

export default Title;
