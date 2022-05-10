import React from 'react';
import './assets/BaiTapBookingTicket.css'
import HangGhe from './HangGhe';
import ThongTinDatGhe from './ThongTinDatGhe';


function DatVeXemFilm(props) {
    return (
        <div className='bg bookingMovie'>
            <div className='bg-2'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-8 text-center'>
                            <h1 className='title'>ĐẶT VÉ XEM PHIM CGV.VN</h1>
                            <div className='screen'>Màn Hình</div>
                            <HangGhe />
                        </div>

                        <div className='col-4'>
                            <ThongTinDatGhe />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DatVeXemFilm;