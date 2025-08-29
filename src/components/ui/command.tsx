import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

// Add children to CommandDialogProps
interface CommandDialogProps extends DialogProps {
  children?: React.ReactNode;
}

// Rest of the file remains unchanged