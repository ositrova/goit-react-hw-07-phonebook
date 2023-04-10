import { RotatingTriangles } from 'react-loader-spinner';


export const Loader = () => (
  <div>    
      <RotatingTriangles
        visible={true}
        height="100"
        width="100"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
