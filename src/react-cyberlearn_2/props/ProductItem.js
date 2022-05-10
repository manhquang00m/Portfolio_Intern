import React from 'react';

function ProductItem(props) {
    return (
        <div>
            <h1 className='text-center' style={{ padding: '30px 0', }}>Shoes Shop</h1>
            <div className='container-fuild'>
                <div className='row' >
                    <div class="d-flex align-items-start " >
                        <div className='col-3 border' style={{ marginLeft: '30px' }}>
                            <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical" >
                                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                            </div>
                        </div>

                        <div className='col-8' style={{ marginLeft: '50px' }}>
                            <div class="tab-content " id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...1</div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className='row'>
                                        {
                                            props.dataProduct.map((item, index) => {
                                                return (
                                                    <div className='col-3' key={index} style={{ marginBottom: '50px' }}>
                                                        <div className='border text-center'>
                                                            <img style={{ width: '70%' }} src={item.image} alt="" />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;