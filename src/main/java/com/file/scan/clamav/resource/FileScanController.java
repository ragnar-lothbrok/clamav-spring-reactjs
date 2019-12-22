package com.file.scan.clamav.resource;

import com.file.scan.clamav.service.FileScanService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.file.scan.clamav.dto.*;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/scan")
public class FileScanController {

  private static Logger LOGGER = LoggerFactory.getLogger(FileScanController.class);

  @Autowired
  private FileScanService fileScanService;

    @PostMapping("/upload")
    public ResponseDto<List<FileScanResponseDto>> uploadFiles(@RequestParam("files") MultipartFile files) {
        return new ResponseDto<List<FileScanResponseDto>>(fileScanService.scanFiles(new MultipartFile[] {files}));
    }
}