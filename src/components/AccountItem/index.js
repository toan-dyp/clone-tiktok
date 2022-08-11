import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/294592716_1129878360956686_5933135573948980739_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=p97dR0IrLooAX8r24UA&tn=oRM-ZlIKMa9OF0x0&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-KJYRSY7oxTPDbuQ1X7rmoI2QSpZPHZWt4TZEOOXVmvQ&oe=62F98A33"
                alt="Toàn"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Trần Thái Toàn
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>@toansieucapvippro</span>
            </div>
        </div>
    );
}

export default AccountItem;
