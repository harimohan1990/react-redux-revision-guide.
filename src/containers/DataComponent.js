import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../actions/dataActions';

const DataComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataComponent;


// Connect: Dispatching Actions with mapDispatchToProps

// connect()(MyComponent)
// // which is equivalent with
// connect(null, null)(MyComponent)

// // or
// connect(mapStateToProps /** no second argument */)(MyComponent)


// Connect: Extracting Data with mapStateToProps

// function mapStateToProps(state, ownProps?)
// export default connect(mapStateToProps)(MyComponent)

// The connect() function connects a React component to a Redux store.

// function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)



