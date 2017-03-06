/**
 * Created by dlb233 on 2017/2/16.
 *
 * Copyright (c) 2017-present dlb233 Inc.
 *
 * Author infomation:
 * Email:420615326@qq.com
 * file infomation(文件功能):
 */

import React, {Component} from 'react'

import BarWithSign from './barWithSign/BarWithSign.jsx'

const fakeData = {

}

class Container extends Component{
    render() {
        return (
            <div style={{height:"600px"}}>
                <BarWithSign option={fakeData} />
            </div>
        );
    }
}

export default Container