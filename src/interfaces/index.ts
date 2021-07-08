export interface CommentsInterface {
    kind: string;
    etag: string;
    id: string;
    snippet: CommentSnippet;
}

interface CommentSnippet {
    videoId: string;
    topLevelComment: TopLevelComment;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
}

export interface TopLevelComment {
    kind: string;
    etag: string;
    id: string;
    snippet: TopLevelSnippet;
}

interface TopLevelSnippet {
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: { value: string };
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    canRate: boolean;
    viewerRating: string;
    likeCount: number;
    publishedAt: string;
    updatedAt: string;
}

export interface CommentsResponse {
    kind: string;
    etag: string;
    id: string;
    snippet: CommentSnippet;
}

interface VideoSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: any;
    channelTitle: string;
    liveBroadcastContent: string;
    [k: string]: any;
}

interface VideoId {
    kind: string;
    videoId: string;
    [k: string]: any;
}

export interface VideoResponse {
    kind: string;
    etag: string;
    id: VideoId;
    snippet: VideoSnippet;
    [k: string]: any;
}
