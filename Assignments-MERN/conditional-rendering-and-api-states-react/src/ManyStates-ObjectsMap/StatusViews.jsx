function StatusView({ status, data }) {
  // map each status to a JSX view
  const views = {
    idle:    <p>Idle</p>,
    loading: <p>Loading...</p>,
    error:   <p style={{color:'red'}}>Failed</p>,
    ready:   <div>{data}</div>
  };

  // pick the view by key; fallback to null if unknown
  return views[status] ?? null;
}
 export default StatusView; 