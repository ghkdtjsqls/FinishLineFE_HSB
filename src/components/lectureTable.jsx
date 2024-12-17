// LectureTable.js
import { StyleSheet, css } from 'aphrodite';

function LectureTable({ subjects }) {  // props로 subjects 받기
    return (
        <div className={css(styles.tableContainer)}>
            <table className={css(styles.table)}>
                <thead>
                    <tr>
                        <th className={css(styles.headerCell)}>이수년도</th>
                        <th className={css(styles.headerCell)}>학기</th>
                        <th className={css(styles.headerCell)}>교과목명</th>
                        <th className={css(styles.headerCell)}>이수구분</th>
                        <th className={css(styles.headerCell)}>주제</th>
                        <th className={css(styles.headerCell)}>학점</th>
                        <th className={css(styles.headerCell)}></th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((subject, index) => (  // subjects 배열을 순회
                        <tr key={index}>
                            <td className={css(styles.cell)}>{subject.year}</td>
                            <td className={css(styles.cell)}>{subject.semester}</td>
                            <td className={css(styles.cell)}>{subject.sub_name}</td>
                            {/* <td className={css(styles.cell)}>
                                <select className={css(styles.select)}>
                                    <option value="">선택</option>
                                    <option value="전선">전선</option>
                                    <option value="전필">전필</option>
                                    <option value="교양">교양</option>
                                </select>
                            </td> */}
                            <td className={css(styles.cell)}>{subject.sub_area}</td>
                            <td className={css(styles.cell)}>{subject.sub_sub}</td>
                            <td className={css(styles.cell)}>{subject.credit}</td>
                            <td className={css(styles.lastCell)}></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = StyleSheet.create({
    tableContainer: {
        width: '100%',
        
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        overflow: 'hidden',
    },
    cell: {
        border: '1px solid #E0E0E0',
        padding: '10px 0px',
        color: '#333333',
        fontSize: '11px',
        textAlign: 'center',
        height: '40px',
        backgroundColor: '#FFFFFF',
        verticalAlign: 'middle',
    },
    lastCell: {
        border: '1px solid #E0E0E0',
        padding: '10px 12px',
        color: '#333333',
        fontSize: '11px',
        textAlign: 'center',
        height: '40px',
        backgroundColor: '#FFFFFF',
        verticalAlign: 'middle',
    },
    select: {
        width: '90%',
        // padding: '4px 8px',
        border: '1px solid #E0E0E0',
        borderRadius: '6px',
        backgroundColor: '#FFFFFF',
        color: '#333333',
        fontSize: '11px',
        outline: 'none',
        cursor: 'pointer',
        height: '28px',
    },
    headerCell: {
        border: '1px solid #E0E0E0',
        color: '#333333',
        fontSize: '10px',
        height: '40px',
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        fontWeight: '600',
        verticalAlign: 'middle',
        textAlign: 'center',
    },
});

export default LectureTable;