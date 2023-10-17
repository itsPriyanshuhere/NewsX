/* eslint-disable react/prop-types */
import { Circles } from 'react-loader-spinner';

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">

      <Circles type="Circles"
        color="#FF5733"
        height={50}
        width={200}
        className="m-5" />

      <p className="text-lg text-center px-2 text-white">{message}</p>
    </div>
  );
}

export default Spinner;
