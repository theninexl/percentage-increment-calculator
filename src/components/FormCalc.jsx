import { useDispatch, useSelector } from "react-redux"
import { calcIncrement } from "../redux/valuesSlice";
import { SimpleFormRow } from "./UI/forms/SimpleForms";
import { useForm } from "react-hook-form";

export const FormCalc = () => {
  const values = useSelector((state) => state.values);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = (data) => {
    dispatch(calcIncrement(data));
  }

  return (
    <>
      <form
       className='bi-c-form-simple bi-l-form-simple bi-l-form-simple--hrz'
       onChange={handleSubmit(submitForm)} >
        <SimpleFormRow>
          <label>
            <span>Valor Inicial</span>
            <input {...register("value1", {
                required: 'Introduce un numero',
                pattern: {
                  value: /^((?!0)[0-9]*)$/mg,
                  message: 'El número inicial no puede ser un cero'
                }
              })
              } 
              type='number'
              placeholder='' />
              {Object.keys(errors).length > 0 ?
              <span className='error'>{errors.value1?.message}</span>
              : ''}
          </label>
          
        </SimpleFormRow>
        <SimpleFormRow>
          <label>
            <span>Valor Final</span>
            <input {...register("value2", {
                required: 'Introduce un numero',
                pattern: {
                  value: /^((?!0)[0-9]*)$/mg,
                  message: 'El número final no puede ser un cero'
                }
              })
              } 
              type='number'
              placeholder='' />
              {Object.keys(errors).length > 0 ?
              <span className='error'>{errors.value2?.message}</span>
              : ''}
          </label>
        </SimpleFormRow>
        <SimpleFormRow>
          <label>
            <span>Aumento</span>
            <input 
              type='text'
              value={`${values.result}%`} />
          </label>
        </SimpleFormRow>
        <SimpleFormRow>
          <label>
            <span>Diferencia</span>
            <input 
              type='number'
              value={`${values.difference}`} />
          </label>
        </SimpleFormRow>          
      </form>
    </>
  );
}