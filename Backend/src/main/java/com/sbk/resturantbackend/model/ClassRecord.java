package com.sbk.resturantbackend.model;

import javax.persistence.Entity;


import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="PeerMentoringClassRecord")
public class ClassRecord {
	@Id
	@Column(name = "ClassId",nullable = false )
	private int classId;
	@Column(name = "ClassLink", length = 45 )
	private String classLink;
	@Column(name = "RoomNo", length = 45 )
	private String roomNo;
	@Column(name = "ClassStatus", length = 45 )
	private String classStatus;
	

	public Integer getClassId() {
		return classId;
	}
	public void setClassId(int classId2) {
		this.classId = classId2;
	}
	public String getClassLink() {
		return classLink;
	}
	public void setClassLink(String classLink) {
		this.classLink = classLink;
	}
	public String getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(String roomNo) {
		this.roomNo = roomNo;
	}
	public String getClassStatus() {
		return classStatus;
	}
	public void setClassStatus(String classStatus) {
		this.classStatus = classStatus;
	}
	
	
	
	
}