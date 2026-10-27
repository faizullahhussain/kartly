const Input = (props) => {
  return (
    <input
      {...props}
      className='border border-border-dark w-full p-2 rounded-md text-[0.8rem] outline-none focus:outline-2 focus:border-primary caret-primary'
    />
  );
};

export default Input;
