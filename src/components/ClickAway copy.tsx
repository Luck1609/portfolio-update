import { FC, useEffect, useRef, useState } from "react";

// const ClickAway = ({ content }: IntrinsicAttributes & { content: FC; }) => {
const ClickAway = ({ content }: { content: FC }) => {
  const [clickAwayState, setClickAwayState] = useState(false)
  // Stores a reference to the containing node
  // This is used when checking where a click is coming from
  const clickAwayRef = useRef();

  
  const toggleState = () => setClickAwayState(!clickAwayState);

  useEffect(() => {
    // When the component mounts, register a click event that processes the click away
    window.addEventListener("click", handleClickAway, true);

    return () => {
      // When the component unmounts, remove the click event that processes the click away
      window.addEventListener("click", handleClickAway, true)
    }
  })

  const handleClickAway = (e: MouseEvent) => {
    // Check if the click came from inside the click away container
    // If it did, do nothing
    console.log("ClickAway ref", clickAwayRef.current)
    console.log("ClickAway target", e.target)
    // console.log("ClickAway props", props)
    // if (clickAwayRef.current.childNodes.contains(e.target)) return;
    
    if (clickAwayRef.current.contains(e.target)) return;
    // Check if the click came from inside an additional node reference
    // If it did, do nothing
    // if (props.nodeRef && props.nodeRef.contains(e.target)) return;

    // Otherwise, the click happened outside of the click away container
    // So lets execute the click away function
    toggleState();
  };


   
  const Children = content

  return <Children ref={clickAwayRef} toggleClickAway={toggleState} showing={clickAwayState} />
}

export default ClickAway;