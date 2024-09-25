const InputBox = ({ name, type, id, value, placeholder }) => {
    return (
      <div className="relative w-full mb-4">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={value}
          id={id}
        />
      </div>
    );
  };
  
  export default InputBox;
  