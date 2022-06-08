import '../styles/spiner.scss'

interface IPropsSpiner {
  message: string;
  loading: boolean;
}

const Spiner = ({loading, message, ...props }: IPropsSpiner) => {
  return (
    <div
      className={`justify-content-center align-items-center modal background ${
        loading && "loading"
      }`}
      tabIndex={-1}
      {...props}
    >
      <div className="spinner-border spiner-text-primary" role="status"></div>
      <strong className="spiner-text-primary mx-3">{message}</strong>
    </div>
  );
};

export default Spiner;
