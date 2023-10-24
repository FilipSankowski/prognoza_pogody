type InputProps = {
  children: React.ReactNode,
  type: string,
  id?: string,
  className?: string,
  name?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>,
}

export default function Input({children, className = '', ...props} : InputProps) : React.ReactNode {
  return (
    <div>
      <span>{children}</span>
      <input
        className={`${className} bg-white border-2 border-gray-400 rounded w-full py-2 px-4 mt-2 text-black focus:outline-none hover:bg-gray-100 focus:border-teal-500`}
        {...props}
      />
    </div>
  )
}