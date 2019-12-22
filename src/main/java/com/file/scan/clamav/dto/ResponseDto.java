package com.file.scan.clamav.dto;

import java.util.Map;

public class ResponseDto<T> {

    private T data;
    private Map<Object,Object> metaData;

    public ResponseDto() {
    }

    public ResponseDto(T data) {
        this.data = data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Map<Object, Object> getMetaData() {
        return metaData;
    }

    public void setMetaData(Map<Object, Object> metaData) {
        this.metaData = metaData;
    }

    public T getData() {
        return data;
    }

}
