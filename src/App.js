import './App.css';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Kho giao diện website miễn phí</h1>
        <h2>Các mẫu website bán hàng đẹp, chuẩn SEO, đảm bảo khách hàng có trải nghiệm tốt nhất giúp bạn bán hàng đa kênh hiệu quả hơn bao giờ hết.</h2>
      </div>
      <div className='container'>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className='template-card'>
            <img alt="l1" src="https://pos.nvncdn.net/_sys/template/20220516_rgvja5gr9D1Wd3TWYq1mu8Ak.png" class="img-responsive"></img>
            <a class="template-card-button" target="_blank" title="T0458" href="http://store.nhanh.vn/demo?id=608">Xem demo</a>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='template-card'>
          <img alt="l1" src="https://pos.nvncdn.net/_sys/template/20220323_WFGDXzXwDrCbzkQk8iOwdcWc.png" class="img-responsive"></img>
            <a class="template-card-button" target="_blank" title="T0458" href="http://store.nhanh.vn/demo?id=604">Xem demo</a>
          </div>
        </Grid>
        <Grid item xs={4}>
        <div className='template-card'>
        <img alt="l1" src="https://pos.nvncdn.net/_sys/template/20201214_TCNkD3JH1H0cJ1VBPeLSLDRn.png" class="img-responsive"></img>
        <a class="template-card-button" target="_blank" title="T0458" href="http://store.nhanh.vn/demo?id=550">Xem demo</a>
        </div>
        </Grid>
        <Grid item xs={4}>
        <div className='template-card'>
        <img alt="l1" src="https://pos.nvncdn.net/_sys/template/20200312_H091g6jkAePSKx8GN3utgq7m.png" class="img-responsive"></img>
        <a class="template-card-button" target="_blank" title="T0458" href="http://store.nhanh.vn/demo?id=515">Xem demo</a>
        </div>
        </Grid>
        <Grid item xs={4}>
        <div className='template-card'>
        <img alt="l1" src="https://pos.nvncdn.net/_sys/template/20200306_axIS1bOpjf7jIBCmFB3vblbI.png" class="img-responsive"></img>
        <a class="template-card-button" target="_blank" title="T0458" href="http://store.nhanh.vn/demo?id=514">Xem demo</a>
        </div>
        </Grid>
        <Grid item xs={4}>
        <div className='template-card'>
        <img alt="l1" src="https://pos.nvncdn.net/_sys/template/20181204_KOOqlNGLGBTTFECKyHrCe2x9.png" class="img-responsive"></img>
        <a class="template-card-button" target="_blank" title="T0458" href="http://store.nhanh.vn/demo?id=453">Xem demo</a>
        </div>
        </Grid>
        <Grid item xs={4}>
        <div className='template-card'>
        <img alt="l1" src="https://pos.nvncdn.net/_sys/template/20190417_GCH6GNrQaDl96yDn3v9KEegr.png" class="img-responsive"></img>
        <a class="template-card-button" target="_blank" title="T0458" href="http://store.nhanh.vn/demo?id=471">Xem demo</a>
        </div>
        </Grid>
        <Grid item xs={4}>
        <div className='template-card'>
        <img alt="l1" src="https://pos.nvncdn.net/_sys/template/20221013_TWKHH1ZCOzBpcetTL6vKQJXj.png" class="img-responsive"></img>
        <a class="template-card-button" target="_blank" title="T0458" href="http://store.nhanh.vn/demo?id=635">Xem demo</a>
        </div>
        </Grid>
        <Grid item xs={4}>
        <div className='template-card'>
        <img alt="l1" src="https://pos.nvncdn.net/_sys/template/20210719_4WpFMBkimk94JO1zOq0xeJDR.png" class="img-responsive"></img>
        <a class="template-card-button" target="_blank" title="T0458" href="http://store.nhanh.vn/demo?id=576">Xem demo</a>
        </div>
        </Grid>
      </Grid>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
