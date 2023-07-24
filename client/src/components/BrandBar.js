import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';


const BrandBar = observer( () => {

    const {device} = useContext(Context)
    console.log({device}, '')
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
              <Card
              style={{cursor:'pointer', maxWidth: '100', }}
              key={brand.id}
              className="p-3"e
              onClick={() => device.setSelectedBrand(brand)}
              border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          >
              {brand.name}
          </Card>
                )}
        </Row>
    );
});

export default BrandBar;