import { Button, Popover, Position, Tooltip } from "@blueprintjs/core";

export default function tooltipDisplay() {
  return (
    <Popover content={<h1>Popover!</h1>} position={Position.RIGHT}>
      <Tooltip
        content="I have a popover!"
        position={Position.RIGHT}
        openOnTargetFocus={false}
      >
        <Button>Hover and click me</Button>
      </Tooltip>
    </Popover>
  );
}
