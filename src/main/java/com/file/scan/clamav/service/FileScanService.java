package com.file.scan.clamav.service;

import org.springframework.web.multipart.MultipartFile;
import com.file.scan.clamav.dto.*;
import java.util.List;

public interface FileScanService {

    List<FileScanResponseDto> scanFiles(MultipartFile[] files);

}
