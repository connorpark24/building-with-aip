export default function Button({ handleClick, text }: { handleClick: () => void, text: string }) {
  return (
    <button
      onClick={handleClick}
      className="shadow-sm text-[0.875rem] px-3.5 py-2 hover:bg-[#6250aa] rounded-sm tracking-tight bg-[#7961db] text-neutral-100"
    >
      {text}
    </button>
  );
}