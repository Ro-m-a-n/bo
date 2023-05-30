import { useState, useCallback, memo } from "react";

const Button = memo(({ onClick }: { onClick: React.MouseEventHandler }) => {
  console.log("rerender");
  return <button onClick={onClick}> click me</button>;
});
export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);
  return (
    <>
      <Button onClick={handleClick}></Button>
      {isVisible && "dkjsdkdjs sdkksdfn  s ks ss sd k"}
    </>
  );
}
