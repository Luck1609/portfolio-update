import { FC, useState } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

export default function ClickAway({ Component }: { Component: FC }) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
    alert(open)
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Component onClick={handleClick} open={open} />
    </ClickAwayListener>
  );
}
