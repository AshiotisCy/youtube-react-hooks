import moment from 'moment'
import { Row, Col } from 'react-bootstrap'
import { CommentsResponse, TopLevelComment } from '../../interfaces'

interface Props {
    comments: CommentsResponse
}


function CommentListItems(props: Props) {

    // Formats the date from the response to DD MM YYY
    const dateFormatter = (date: string) => {
        const formatDate: string = moment(date).format('DD MMM YY')
        return formatDate
    }

    const displayCommentDate = (topLevelComment: TopLevelComment): JSX.Element => {
        if (topLevelComment?.snippet?.publishedAt === topLevelComment?.snippet?.updatedAt) {
            return <p id='date'>{dateFormatter(topLevelComment.snippet.publishedAt)}</p>
        }
        else if (topLevelComment?.snippet?.publishedAt !== topLevelComment?.snippet?.updatedAt) {
            return <p>
                <span id='date'>{dateFormatter(topLevelComment.snippet.updatedAt)}</span>
                <span id='edited'>{' (Edited)'}</span>
            </p>
        }
        else {
            return <p />
        }
    }

    const imageUrl = props.comments.snippet.topLevelComment.snippet.authorProfileImageUrl;
    const topLevelComment: TopLevelComment = props.comments.snippet.topLevelComment;

    return (
        <div className='commentWrapper'>
            <Row>
                <Col className='authorImage col-md-2'>
                    <img className="authorImage-object" src={imageUrl} alt={''} />
                </Col>
                <Col className='CommentDataSection col-md-10'>
                    <div className="commentDate authorName">
                        <div className = "authornameSpacing">
                            {topLevelComment.snippet.authorDisplayName}
                        </div>
                        <div>
                            {displayCommentDate(topLevelComment)}
                        </div>
                    </div>
                    <p className="commentText" >
                        {topLevelComment.snippet.textDisplay}
                    </p>
                    <p className="likes" >
                        {topLevelComment.snippet.likeCount + ' Likes'}
                    </p>
                </Col>
            </Row>
        </div>
    )

}

export default CommentListItems