type ButtonProps = {
  children: React.ReactNode,
  id?: string,
  className?: string,
  name?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export default function Button({children, className = '', ...props} : ButtonProps) : React.ReactNode {
  return (
    <button
      className={`${className} bg-teal-600 rounded w-full p-2 text-white focus:outline-none hover:bg-teal-500`}
      {...props}
    >
      {children}
    </button>
  )
}