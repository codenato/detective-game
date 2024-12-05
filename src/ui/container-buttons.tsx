import Button from "./button";

export function ContainerButtons() {
  return (
    <div className="flex flex-row justify-between">
      <a href="/">
        <Button label="Palpite" />
      </a>
      <a href="/">
        <Button label="Palpite final" />
      </a>
    </div>
  );
}
