const Switch = (props) => {
  const { active, onChange } = props;

  return (
    <label
      htmlFor="switch"
      className="relative cursor-pointer w-12 h-6 bg-toggle-bg-light rounded-xl dark:bg-gradient-to-r dark:from-toggle-bg-dark-from dark:to-toggle-bg-dark-to"
    >
      <input
        type="checkbox"
        id="switch"
        className="opacity-0 absolute z-10"
        checked={active}
        onChange={(e) => onChange(e)}
      />
      <span
        className={`w-[16px] h-[16px] bg-background-light transition-all	duration-300 dark:bg-background-dark absolute tranform top-[50%] translate-y-[-50%] rounded-full ${
          active ? 'left-1' : 'left-[25px]'
        }`}
      />
    </label>
  );
};

export default Switch;
