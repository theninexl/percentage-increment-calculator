import { useSelector } from "react-redux";

export const CalcResult = () => {

  const values = useSelector((state) => state.values);

  return (
    <div>
      <div className='bi-c-mathBlock'>
        <div className='bi-c-mathBlock__base'>
          <span className="math-base">Incremento % = 100 x</span>
          <div className="math-fraction">
            <span className="math-fraction__top">{values.value2} - {values.value1}</span>
            <span className="math-fraction__divider"></span>
            <span className="math-fraction__bottom">{values.value1}</span>
          </div>
        </div>
      </div>
    </div>
  );
};