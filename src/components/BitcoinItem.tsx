import { FC } from "react";
import { Datum } from "../interfaces/Data";

const BitcoinItem: FC<Datum> = ({
  high,
  close,
  open,
  time,
  volumefrom,
  volumeto,
}) => {
  return (
    <tbody>
      <tr>
        <td>{high}</td>
        <td>{close}</td>
        <td >{open}</td>
        <td>{time}</td>
        <td className="text-success">{volumefrom}</td>
        <td className="text-danger">{volumeto}</td>
      </tr>
    </tbody>
  );
};

export default BitcoinItem;
