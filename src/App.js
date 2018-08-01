import React, { Component } from 'react';

import './App.css';

// import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import NavBar from './components/Navbar';
// import { Row, Col } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import {
  Card,
  // Button,
  CardImg,
  CardTitle,
  CardText,
  // CardDeck,
  // CardSubtitle,
  CardBody
} from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <br />
        <br />
        <Jumbotron fluid className="Jumbotron" style={jumboStyle}>
          <Container fluid>
            <h1 className="display-3">Belajar Jadi Asyik!</h1>
            <p className="lead">
              Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren
              Koding.
            </p>
            <br />
            <Button color="success" size="lg">
              Mulai Belajar
            </Button>{' '}
          </Container>
        </Jumbotron>
        <h2 style={{ textAlign: 'center' }}>Daftar Kajian Koding Rutin</h2>
        <br />
        <Container>
          <Row>
            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle style={{ textAlign: 'left' }}>
                    Kajian Koding #3
                  </CardTitle>
                  {/* <CardSubtitle>Kajian Koding #3</CardSubtitle> */}
                  <CardText style={{ textAlign: 'left' }}>
                    ReactJS dan Firebase Auth/Hosting
                  </CardText>
                  <Row>
                    <div className="col-5">
                      <a className="text-secondary small">by Santren Koding</a>
                    </div>
                    <div className="col-7 text-right">
                      <span
                        textAlign="right"
                        color="red"
                        className="small"
                        style={{ marginRight: '15px', color: 'red' }}>
                        Kuota Terbatas
                      </span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle style={{ textAlign: 'left' }}>
                    Kajian Koding #2
                  </CardTitle>
                  {/* <CardSubtitle style={{ textAlign: 'left' }}>
                    Card subtitle
                  </CardSubtitle> */}
                  <CardText style={{ textAlign: 'left' }}>
                    html, css, bootstrap dasar
                  </CardText>
                  <Row>
                    <div className="col-5">
                      <a className="text-secondary small">by Santren Koding</a>
                    </div>
                    <div className="col-7 text-right">
                      <span
                        textAlign="right"
                        color="red"
                        className="small"
                        style={{ marginRight: '15px', color: 'red' }}>
                        Kuota Terbatas
                      </span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle style={{ textAlign: 'left' }}>
                    Kajian Koding #1
                  </CardTitle>
                  {/* <CardSubtitle style={{ textAlign: 'left' }}>
                    Card subtitle
                  </CardSubtitle> */}
                  <CardText style={{ textAlign: 'left' }}>
                    Belajar Laravel Dasar
                  </CardText>
                  <Row>
                    <div className="col-5">
                      <a className="text-secondary small">by Santren Koding</a>
                    </div>
                    <div clasName="col-7 text-right">
                      <span
                        textAlign="right"
                        color="red"
                        className="small"
                        style={{ marginRight: '15px', color: 'red' }}>
                        Kuota Terbatas
                      </span>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Button outline color="success" className="my-4">
          Lihat Seluruh Kajian Koding
        </Button>

        <div className="sanlat-body" style={{ borderTop: '1px solid #e7e7e7' }}>
          <br />
          <h3 style={{ textAlign: 'center' }}>Daftar Santren Kilat Koding</h3>
          <br />
          <Container>
            <Row>
              <Col sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle style={{ textAlign: 'left' }}>
                      Kajian Koding #3
                    </CardTitle>
                    {/* <CardSubtitle>Kajian Koding #3</CardSubtitle> */}
                    <CardText style={{ textAlign: 'left' }}>
                      ReactJS dan Firebase Auth/Hosting
                    </CardText>
                    <Row>
                      <div className="col-5">
                        <a className="text-secondary small">
                          by Santren Koding
                        </a>
                      </div>
                      <div className="col-7 text-right">
                        <span
                          textAlign="right"
                          color="red"
                          className="small"
                          style={{ marginRight: '15px', color: 'red' }}>
                          Kuota Terbatas
                        </span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Button outline color="success" className="my-4">
          Lihat Seluruh Santren Kilat
        </Button>

        <div className="sanl-body" style={{ borderTop: '1px solid #e7e7e7' }}>
          <br />
          <div className="container">
            <div className="row">
              <div
                className="Warna-biru col-12 col-sm-12 col-md-6 col-lg-6"
                style={{ backgroundColor: '#0bc72a', color: '#fff' }}>
                <div className="card-body">
                  <h4 className="card-title text-center">Kegiatan</h4>
                  <br />
                  <div align="center">
                    <p className="card-text text-center">
                      <img
                        width="18px;"
                        src="https://png.icons8.com/ios/50/ffffff/login-rounded-right-filled.png"
                        class=""
                      />{' '}
                      Koding
                    </p>
                    <p className="card-text text-center">
                      <img
                        width="18px;"
                        src="https://png.icons8.com/ios/50/ffffff/login-rounded-right-filled.png"
                        class=""
                      />{' '}
                      Belajar Agama dan Al Qur'an
                    </p>
                    <p className="card-text text-center">
                      <img
                        width="18px;"
                        src="https://png.icons8.com/ios/50/ffffff/login-rounded-right-filled.png"
                        class=""
                      />{' '}
                      Pendidikan Karakter
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-7">
                      <a className="card-text small text-secondary" />
                    </div>
                    <div align="right" className="col-5">
                      <span className="small" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="Warna-putih col-12 col-sm-12 col-md-6 col-lg-6"
                style={{ backgroundColor: '#fff' }}>
                <div className="card-body mx-0" style={{ border: '' }}>
                  <img
                    height="100px"
                    src="http://i63.tinypic.com/oid9xu.png"
                    className="my-1"
                  />
                  <h4 className="card-title text-center">
                    "Memberi Manfaat Untuk Umat"
                  </h4>
                  <br />
                  <p className="card-text text-center">-Santren Koding-</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div
          className="sanlight-body"
          style={{ borderTop: '1px solid #e7e7e7' }}>
          <br />
          <h3 className="text-center">Mondok by Santren Koding</h3>
          <p className="card-text text-center">
            Sebuah Kegiatan Belajar Intensif Programming & Al Qur'an Selama 3
            Tahun hingga jaminan kerja
          </p>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4" />
              <div
                align="center"
                className="col-12 col-sm-12 col-md-4 col-lg-4">
                <img
                  width="100%"
                  className="Card"
                  src="http://i67.tinypic.com/2m2gkyp.png"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4" />
            </div>
            <div className="col-sm-4">
              <br />
            </div>
          </div>
        </div>

        <button className="btn btn-outline-success my-4" type="submit">
          Lihat Selengkapnya
        </button>

        <div className="sanl-body" style={{ borderTop: '1px solid #e7e7e7' }}>
          <br />
          <h3 className="text-center">Sponsor & Partner</h3>
          <br />
          <div class="row">
            <div align="center" class="col-12 col-sm-12 col-md-4 col-lg-4" />
            <div align="center" class="col-12 col-sm-12 col-md-4 col-lg-4">
              <a href="http://klinikita.co.id/">
                <img
                  width="80%"
                  class="box-shadow"
                  src="http://i67.tinypic.com/2hcn70k.jpg"
                />
              </a>
            </div>
            <div align="center" class="col-12 col-sm-12 col-md-4 col-lg-4" />
          </div>
        </div>

        <br />
        <div className="container">
          <div class="row">
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="https://www.undip.ac.id/language/id/">
                {' '}
                <img
                  height="100px"
                  src="https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png"
                />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="http://www.dinus.ac.id/">
                <img
                  height="100px"
                  src="http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358"
                />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="https://www.unisbank.ac.id/">
                {' '}
                <img
                  height="100px"
                  src="https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg"
                />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="http://www.java-valley.com/">
                {' '}
                <img
                  height="100px"
                  src="http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png"
                />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="https://www.dynamiclearningid.org/">
                {' '}
                <img
                  height="100px"
                  src="https://dynamiclearningid.files.wordpress.com/2017/01/orderdilla.png?w=500"
                />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <a href="https://www.go-mekanik.com/">
                {' '}
                <img
                  height="100px"
                  src="https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png"
                />
              </a>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-12 col-sm-6 col-md-2 col-lg-2">
              <br />
              <a href="http://sdk.semarangkota.go.id/">
                <img
                  height="100px"
                  src="http://sdk.semarangkota.go.id/web/pemkot.png"
                />
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <br />
              <a href="http://www.sandec.org/">
                {' '}
                <img
                  height="80px"
                  src="http://www.sandec.org/images/sandec-logo.png"
                />
              </a>
              <br />
            </div>
            <div className="col-12 col-sm-6 col-md-2 col-lg-2">
              <a href="https://www.facebook.com/SemarangOpenGo/">
                <img height="120px" src="http://i64.tinypic.com/28v94w6.png" />
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <br />
              <img
                height="50px"
                src="http://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png"
              />
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <div
            className="About-body"
            style={{ borderTop: '1px solid #e7e7e7' }}>
            <br />
            <br />
            <h3>Kontak</h3>
            <br />
            <div className="container">
              <div className="row">
                <div align="center" className="col">
                  <i className="anticon anticon-phone" /> 082225111587 <br />
                  <i className="anticon anticon-mail" /> santrenkoding@gmail.com{' '}
                  <br />
                  <br />
                  <i className="anticon anticon-environment" /> Titik Ruang
                  Space,<br />Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,<br />Kota
                  Semarang, Jawa Tengah 50269
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                display: 'block',
                height: '60px',
                width: '100%',
                backgroundColor: 'rgb(250, 250, 250)'
              }}
            />
            <div
              style={{
                borderTop: '1px solid rgb(231, 231, 231)',
                textAlign: 'center',
                padding: '20px',
                left: '0px',
                bottom: '0px',
                height: '60px',
                width: '100%',
                color: 'rgb(108, 117, 125)'
              }}>
              <div className="container">
                <div className="row">
                  <div align="left" className="col-12">
                    Copyright © Santren Koding 2018. All rights reserved.
                  </div>
                  <div className="col-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.judul}</h1>
//         <p>{this.props.isi}</p>
//       </div>
//     );
//   }
// }

// class Counter extends Component {
//   state = {
//     angka: 0
//   };

//   tambah = () => {
//     this.setState({
//       angka: this.state.angka + 1
//     });
//   };

//   minus = () => {
//     if (this.state.angka === 0) {
//       return alert('Jangan Minus');
//     }
//     this.setState({
//       angka: this.state.angka - 1
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2 style={{}}>{this.state.angka}</h2>
//         <Button outline color="success" onClick={this.tambah}>
//           Tambah
//         </Button>
//         <Button outline color="danger" onClick={this.minus}>
//           Kurang
//         </Button>
//       </div>
//     );
//   }
// }
var jumboStyle = {
  marginTop: '5px'
  // width: '100%',
  // zIndex: '100'
};
