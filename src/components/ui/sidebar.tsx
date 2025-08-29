// ... existing imports ...

// Fix variant and size types
const sidebarMenuButtonVariants = cva(
  "flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "border border-sidebar-border",
      },
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Rest of the file remains unchanged