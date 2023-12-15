import { CalcResult } from './components/CalcResult';
import { FormCalc } from './components/FormCalc';
import { Navbar } from './components/Navbar';
import { MainHeading } from './components/UI/headings';
import { ColsContainer, SimpleCol } from './components/UI/layout/LayoutSections';
import { TableHeader } from './components/UI/tables/TableHeaders';
import './scss/styles.scss';




function App() {
  const boxStyle = {
    width: '100%',
    borderRadius: 6,
    border: '1px solid #40a9ff',
  };

  return (
    <>
    <Navbar />
      <main className="bi-u-h-screen--wSubNav bi-l-container">
      <TableHeader>
        <MainHeading>
          Calculadora aumento de porcentaje
        </MainHeading>
      </TableHeader>
      <ColsContainer className='bi-u-border-bb-gm'>
        <SimpleCol className='bi-u-spacer-pb-large'>
          <FormCalc />
          <CalcResult />
        </SimpleCol>
        <SimpleCol className='bi-u-spacer-pb-large'>
          <p className='bi-u-text-base'>Esta calculadora sirve para calcular <strong>el incremento de un valor a otro en términos de porcentaje de la cantidad original.</strong>. Para saber cómo se realiza este cálculo es necesario comprender el concepto de cálculo de incremento porcentual.</p>
          <h3 className='bi-u-text-headS'>El concepto de incremento porcentual</h3>
          <p className='bi-u-text-base'>Este cálculo se refiere a la cantidad que se incrementa un número con respecto a otro en porcentaje, es decir, en tantas partes del valor original dividido en 100 partes. Un incremento del 10 por ciento indicaría que hemos tomado el valor original, lo hemos divivido en 100 partes, y le hemos añadido posteriormente 10 partes más iguales a las del producto de la primera división</p>
          <h3 className='bi-u-text-headS'>Fórmula del incremento porcentual</h3>
          <p className='bi-u-text-base'>La fórmula para calcular el incremento porcentual entre dos valores es la siguiente:</p>
          <div className='bi-c-mathBlock'>
            <div className='bi-c-mathBlock__base'>
              <span className="math-base">Incremento % = 100 x</span>
              <div className="math-fraction">
                <span className="math-fraction__top">final - inicial</span>
                <span className="math-fraction__divider"></span>
                <span className="math-fraction__bottom">inicial</span>
              </div>
            </div>
          </div>
          <p className='bi-u-text-base'>Esta calculadora está creada por <a href="https://www.linkedin.com/in/theninexl/" target="_blank">Noé Alegría</a>, utilizando React. El código puede encontrarse en <a href="https://github.com/theninexl/percentage-increment-calculator" target="_blank">Github</a> y fue actualizada por última vez el 15/12/2023</p>
        </SimpleCol>
      </ColsContainer>
      <ColsContainer>
        <SimpleCol className='bi-u-centerText'>
          <p className='bi-u-spacer-mt-large'>&copy; 2023 elarcadenoe.es</p>
        </SimpleCol>
      </ColsContainer>
      
        
        
      </main>
    </>
  )
}

export default App
