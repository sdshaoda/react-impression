import classnames from 'classnames';
import React, { Component } from 'react';

export default class CheckBox extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    //props校验
    static propTypes = {
        //自定义样式
        className: React.PropTypes.string,
        //是否可以点击
        disabled: React.PropTypes.bool,
        //是否默认选中
        defaultChecked: React.PropTypes.bool,
    }
    //默认props
    static defaultProps = {
        disabled: false,
        defaultChecked: false,
    }
    //渲染
    render(){
        let { defaultChecked, disabled, classname } = this.props;

        return(
            <label className={classnames('checkbox', classname)}>
                <input type="checkbox" disabled={disabled} defaultChecked={defaultChecked} />
                <div className="checkbox-addon">
                    <i className="fa fa-check"></i>
                </div>
                <span className="checkbox-label">
                    {this.props.children}
                </span>
            </label>
        );
    }
}