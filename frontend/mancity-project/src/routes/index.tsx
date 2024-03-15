import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import SignUpPage from "@/pages/user/SignUpPage";
import LoginPage from "@/pages/user/LoginPage";
import AlertPage from "@/pages/user/AlertPage";
import MapPage from "@/pages/MapPage";
import MatchListPage from "@/pages/match/MatchListPage";
import MatchFilterPage from "@/pages/match/MatchFilterPage";
import MatchDetailPage from "@/pages/match/MatchDetailPage";
import MatchRegisterPage from "@/pages/match/MatchRegisterPage";
import PlayerFixPage from "@/pages/analysis/PlayerFixPage";
import FeedbackPage from "@/pages/analysis/FeedbackPage";
import ReplayPage from "@/pages/analysis/ReplayPage";
import VideoCommunityPage from "@/pages/community/VideoCommunityPage";
import TalkCommunityPage from "@/pages/community/TalkCommunityPage";
import CommunityRegisterPage from "@/pages/community/CommunityRegisterPage";
import CommunityEditPage from "@/pages/community/CommunityEditPage";
import VideoDetailPage from "@/pages/community/VideoDetailPage";
import TalkDetailPage from "@/pages/community/TalkDetailPage";
import ClubListPage from "@/pages/club/ClubListPage";
import ClubDetailPage from "@/pages/club/ClubDetailPage";
import ClubRegisterPage from "@/pages/club/ClubRegisterPage";
import ClubEditPage from "@/pages/club/ClubEditPage";
import ProfilePage from "@/pages/user/ProfilePage";
import ProfileEditPage from "@/pages/user/ProfileEditPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/alert" element={<AlertPage/>} />
    <Route path="/map" element={<MapPage/>} />
    <Route path="/match" element={<MatchListPage/>} />
    <Route path="/match/filter" element={<MatchFilterPage/>} />
    <Route path="/match/:match_id" element={<MatchDetailPage/>} />
    <Route path="/match/register" element={<MatchRegisterPage/>} />
    <Route path="/players/:match_id" element={<PlayerFixPage/>} />
    <Route path="/feedback/:match_id" element={<FeedbackPage/>} />
    <Route path="/replay/:match_id" element={<ReplayPage/>} />
    <Route path="/community/video" element={<VideoCommunityPage/>} />
    <Route path="/community/talk" element={<TalkCommunityPage/>} />
    <Route path="/community/register" element={<CommunityRegisterPage/>} />
    <Route path="/community/edit" element={<CommunityEditPage/>} />
    <Route path="/community/video/:community_id" element={<VideoDetailPage/>} />
    <Route path="/community/talk/:community_id" element={<TalkDetailPage/>} />
    <Route path="/club" element={<ClubListPage/>} />
    <Route path="/club/:club_id" element={<ClubDetailPage/>} />
    <Route path="/club/register" element={<ClubRegisterPage/>} />
    <Route path="/club/edit/:club_id" element={<ClubEditPage/>} />
    <Route path="/profile/:user_id" element={<ProfilePage/>} />
    <Route path="/profile/edit/:user_id" element={<ProfileEditPage/>} />
  </Routes>
);

export default AppRoutes;
