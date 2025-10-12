import StarField from "../StarField";

export default function StarFieldExample() {
  return (
    <div className="relative h-96 bg-gradient-to-b from-[#231F20] to-[#1a1718]">
      <StarField />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-white text-xl">Twinkling Stars Animation</p>
      </div>
    </div>
  );
}
