export function BlockComponent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-background-white relative h-full w-full overflow-hidden rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
