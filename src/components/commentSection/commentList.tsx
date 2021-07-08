import CommentListItems from "./commentListItems"
import { Row } from 'react-bootstrap'
import { CommentsResponse } from "../../interfaces"


interface Props {
    data: CommentsResponse[]
}

function CommentList(props: Props) {

    //Goes through each one of the videos in the array and then calls the commentListItems to diplay each comment individualy 
    const commentItems = props?.data.map((comments: CommentsResponse) => {
        if (props.data.length > 0) {
            return (
                <CommentListItems
                    comments={comments}
                    key={comments.id}
                />
            )
        } else {return ""}
    })

    return (
        <div>
            <div className='CommentsTitle col-md-12'>Comments</div>
            <Row >
                <div className='CommentSection col-md-8'>
                    {commentItems}
                </div>
            </Row>
        </div>
    )
}

export default CommentList