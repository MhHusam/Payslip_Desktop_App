import { useEffect, useState } from 'react'
import Loading from './components/Loading';
import PayslipForm from './components/inputs/PayslipForm';


 
 
 
 
const App = () => {
 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    document.body.classList.add('loading-active');
    return     <div><Loading /></div> ;
  }else {
    document.body.classList.remove('loading-active');
    return (
          <PayslipForm   />
    );
  }

};

export default App
