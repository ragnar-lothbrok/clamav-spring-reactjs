package com.file.scan.clamav.cache;

import java.util.Collections;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class MetaDataServiceCache {

    private static ConcurrentHashMap<Object,Object> cache  = new ConcurrentHashMap<>();

    public static void add(Object key,Object value) {
        cache.put(key, value);
    }

    public static Map<Object, Object> getAll() {
        return Collections.unmodifiableMap(cache);
    }
}