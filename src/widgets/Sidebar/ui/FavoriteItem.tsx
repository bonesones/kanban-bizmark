import clsx from "clsx";

export const FavoriteItem = ({ title, active, onClick }: FavoriteItemProps) => {
  const className = clsx(
    "w-2.5 h-2.5 rounded-full",
    active ? "bg-accentLightBlue" : "bg-accentGreen",
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-3 items-center cursor-pointer"
    >
      <div className={className}></div>
      <span className="text-sm font-semibold text-textMain">{title}</span>
    </button>
  );
};

export type FavoriteItemProps = {
  title: string;
  active: boolean;
  boardId: number;
  onClick: () => void;
};
