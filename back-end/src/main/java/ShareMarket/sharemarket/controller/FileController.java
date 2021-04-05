package ShareMarket.sharemarket.controller;

import ShareMarket.sharemarket.domain.File.File;
import ShareMarket.sharemarket.domain.File.FileRepository;
import ShareMarket.sharemarket.dto.FileDto;
import ShareMarket.sharemarket.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class FileController {

    @Autowired
    private FileService fileService;

    @Autowired
    private FileRepository fileRepository;

    @PostMapping("/uploadMultipleFiles/{id}")
    public List<FileDto> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files, @PathVariable Long id) {
        List<FileDto> fileDtoList = fileService.uploadFiles(files, id);

        return fileDtoList;
    }

    //n번 게시글의 사진을 가져오는 api
    // FileDto로 반환한다. -> 밑에거에서 id값은 빠짐
    @GetMapping("/post/{id}/files")
    public List<FileDto> getFiles(@PathVariable Long id) {
        return fileService.getFile(id);
    }

    // FileEntity를 바로 반환하는안좋은 api
//    @GetMapping("/post/{id}/files")
//    public List<File> getFiles(@PathVariable Long id) {
//        return fileRepository.findAllByPost_id(id);
//    }


}