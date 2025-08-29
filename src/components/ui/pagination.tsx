// ... existing imports ...

// Fix the type constraint
interface PaginationButtonProps
  extends React.ComponentProps<typeof Button> {
  isActive?: boolean;
}

// Rest of the file remains unchanged