package ShareMarket.sharemarket.service;


import ShareMarket.sharemarket.domain.File.FileRepository;
import ShareMarket.sharemarket.domain.posts.Post;
import ShareMarket.sharemarket.domain.posts.PostsRepository;
import ShareMarket.sharemarket.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor // Repository를 주입하기 위해 사용
@Service
public class PostsService {
    private final PostsRepository postsRepository;
    private final FileRepository fileRepository;

    @Transactional
    public Post save(PostsRequestDto postsRequestDto){
        //JpaRepository에 정의된 메소드save() -> DB에 INSERT와 UPDATE를 담당한다. (자동생성)
        //매개변수로는 Entity를 전달함
        return postsRepository.save(postsRequestDto.toEntity());
    }

    @Transactional
    public Long update(Long id, PostsUpdateRequestDto postsUpdateRequestDto) {
        Post post = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));

        post.update(postsUpdateRequestDto.getTitle(), postsUpdateRequestDto.getContent());

        return id;
    }

    @Transactional
    public void delete (Long id) {
        Post post = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));

        postsRepository.delete(post);
    }

    @Transactional(readOnly = true)
    // get post1개
    public PostsResponseDto findById(Long id) {
        Post entity = postsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));

        return new PostsResponseDto(entity);
    }

    @Transactional(readOnly = true)
    public List<PostsListResponseDto> findAllDesc() {
        return postsRepository.findAllDesc().stream()
                .map(PostsListResponseDto::new)
                .collect(Collectors.toList());
    }
}