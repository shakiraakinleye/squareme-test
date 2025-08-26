import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { Tooltip } from "../ui/tooltip";
import cx from "classnames";

interface Props extends ButtonProps {
  icon: React.ElementType;
  tooltip?: string;
  onClick?: () => void;
  iconClassName?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ icon, tooltip, iconClassName, ...buttonProps }: Props, ref) => {
    const IconComponent = icon;
    return (
      <Tooltip
        content={tooltip}
        disabled={tooltip === undefined}
        openDelay={100}
        closeDelay={100}
        positioning={{ offset: { mainAxis: 4, crossAxis: 4 } }}
        contentProps={{
          css: {
            "--tooltip-bg": "black",
            rounded: "md",
            color: "white",
            padding: 2.5,
            textTransform: "capitalize",
            fontFamily: "playfair",
            fontSize: "xs",
          },
        }}
      >
        <Button ref={ref} className="min-w-fit min-h-fit p-1" {...buttonProps}>
          <IconComponent
            strokeWidth={1.5}
            className={cx("w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8", iconClassName)}
          />
        </Button>
      </Tooltip>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
